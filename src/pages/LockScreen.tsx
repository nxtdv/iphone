import background from "/img/lockscreen.png";
import camera from "/camera.svg";
import CurrentDate from "../components/date/CurrentDate";
import CurrentTime from "../components/times/CurrentTime";
import flash from "/flash.svg";
import HeaderBar from "./HeaderBar";
import styles from "./LockScreen.module.scss";
import { animated, useSpring } from "react-spring";
import { clamp } from "lodash-es";
import { ReactNode, useEffect, useRef, useState } from "react";
import { StateType, useGestureResponder } from "react-gesture-responder";

interface LockScreenProps {
  children: ReactNode;
}

interface onMoveShouldSet {
  xy: number[];
  initialDirection: number[];
}

interface onMove {
  delta: number[];
  direction: number[];
  distance: number;
  initial: number[];
  initialDirection: number[];
  lastLocal: number[];
  local: number[];
  previous: number[];
  time: number;
  velocity: number;
  xy: number[];
}

function linearConversion(a: number[], b: number[]) {
  var o = a[1] - a[0],
    n = b[1] - b[0];

  return function (x: number) {
    return ((x - a[0]) * n) / o + b[0];
  };
}

export function LockScreen({ children }: LockScreenProps) {
  const showLockOnMount = true;
  const height = 590;
  const PANEL_THRESHOLD = 150;
  const LOCK_THRESHOLD = height / 2;
  const convert = linearConversion([height - 100, height], [12, 0]);
  const blurFn = linearConversion([0, PANEL_THRESHOLD], [0, 15]);
  const rightSheet = useRef(false);
  const [showing, setShowing] = useState(showLockOnMount);
  const [showingPanel, setShowingPanel] = useState(false);
  const [renderPanelItems, setRenderPanelItems] = useState(false);
  const [{ y }, setLock] = useSpring(() => ({
    y: showLockOnMount ? height : 0,
  }));
  const [{ top }, setPanel] = useSpring(() => ({
    top: 0,
  }));

  useEffect(() => {
    if (showing) {
      setLock.start({ y: height, immediate: true });
    }
  }, [showing, height]);

  function onEnd(state: StateType) {
    const [, y] = state.delta;

    if (rightSheet.current || showingPanel) {
      const ry = showingPanel
        ? PANEL_THRESHOLD + state.delta[1]
        : state.delta[1];

      const shouldShow = showingPanel
        ? ry > PANEL_THRESHOLD - PANEL_THRESHOLD / 4
        : ry > PANEL_THRESHOLD / 4;

      if (shouldShow) {
        setPanel({ top: PANEL_THRESHOLD, immediate: false });
        setShowingPanel(true);
        setRenderPanelItems(true);
      } else {
        setPanel({ top: 0, immediate: false });
        setShowingPanel(false);
        setRenderPanelItems(false);
      }

      return;
    }

    const ry = showing ? height + y : y;

    function open() {
      setShowing(true);
      setLock({ y: height, immediate: false });
    }

    function close() {
      setShowing(false);
      setLock.start({ y: 0, immediate: false });
    }

    if (showing) {
      if (
        state.direction[1] < 0 &&
        state.initialDirection[1] < 0 &&
        state.velocity > 0.25
      ) {
        return close();
      }
    } else {
      if (
        state.direction[1] > 0 &&
        state.initialDirection[1] > 0 &&
        state.velocity > 0.25
      ) {
        return open();
      }
    }

    return ry > LOCK_THRESHOLD ? open() : close();
  }

  const { bind } = useGestureResponder({
    onStartShouldSet: () => false,
    onRelease: onEnd,
    onTerminate: onEnd,
    onMove: (state: onMove) => {
      if (rightSheet.current) {
        const ry = showingPanel
          ? PANEL_THRESHOLD + state.delta[1]
          : state.delta[1];

        if (
          state.direction[1] > 0 &&
          ry > LOCK_THRESHOLD / 4 &&
          !renderPanelItems
        ) {
          setRenderPanelItems(true);
        } else if (
          state.direction[1] < 0 &&
          renderPanelItems &&
          ry < LOCK_THRESHOLD - LOCK_THRESHOLD / 4
        ) {
          setRenderPanelItems(false);
        }

        setPanel({
          top: ry,
          immediate: true,
        });
        return;
      }

      setLock.start({
        y: showing ? height + state.delta[1] : state.delta[1],
        immediate: true,
      });
    },
    onMoveShouldSet: ({ xy, initialDirection }: onMoveShouldSet) => {
      if (showing || showingPanel) {
        if (initialDirection[1] < 0) {
          return true;
        }

        return false;
      }

      return false;
    },
  });

  return (
    <div className={styles.LockScreen} {...bind}>
      <animated.div
        className={styles.LockScreenBlurBg}
        style={{
          willChange: "filter",
          filter: top.to((top) => {
            return `blur(${blurFn(clamp(top, 0, PANEL_THRESHOLD))}px)`;
          }),
        }}
      >
        <animated.div
          aria-hidden={!showing}
          className={styles.LockScreenContent}
          style={{
            transform: y.to((y) => `translateY(${clamp(y, 0, height)}px)`),
          }}
        >
          <div>
            <animated.div
              className={styles.LockScreenBlurImg}
              style={{
                transform: y.to({
                  range: [0, height],
                  output: ["translateY(300px)", "translateY(0px)"],
                  extrapolate: "clamp",
                }),
                willChange: "filter",
                filter: y.to(
                  (y) => `blur(${convert(clamp(y, height - 100, height))}px)`
                ),
                backgroundImage: `url(${background})`,
              }}
            />
            <div className={styles.LockScreenDateTime}>
              <HeaderBar lock={true} />
              <div className={styles.LockScreenTime}>
                <CurrentDate />
                <CurrentTime
                  fontSize="70px"
                  fontFamily="SF-Pro-Rounded-Medium"
                  lineHeight="0"
                  letterSpacing="-2.12px"
                  height="62px"
                />
              </div>
              <div className={styles.LockScreenButtonContainer}>
                <button className={styles.LockScreenButton}>
                  <img src={flash} className={styles.flash} alt="flash" />
                </button>
                <button className={styles.LockScreenButton}>
                  <img src={camera} className={styles.camera} alt="camera" />
                </button>
              </div>
              <div className={styles.LockScreenSwipeBar} />
            </div>
          </div>
        </animated.div>
        {children}
      </animated.div>
    </div>
  );
}
