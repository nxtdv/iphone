import addButton from "/addButton.svg";
import AppContainer from "../../../../components/AppContainer/AppContainer";
import photoLibrary from "/photoLibrary.svg";
import styles from "../Photos.module.scss";
import { BottomNav } from "../../../../components/BottomNav/BottomNav";
import { ImageProps } from "../../../../store/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactSVG } from "react-svg";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const PhotosList = ({ data }: { data: ReadonlyArray<ImageProps> }) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  console.log("data", data);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);

  return (
    <div style={{ height: "100%" }}>
      <AppContainer inMode>
        <div className={styles.photosContainer}>
          <div className={styles.photosList}>
            {!data.length ? (
              <div className={styles.emptyContainer}>
                <p className={styles.emptyTitle}>No Photos or Videos</p>
              </div>
            ) : (
              <div className={styles.imagesContainer}>
                {data.map((item) => (
                  <div
                    ref={ref}
                    key={item.id}
                    className={styles.imageContainer}
                  >
                    <LazyLoadImage
                      className={styles.image}
                      src={item.images}
                      alt={item.id}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </AppContainer>

      <BottomNav>
        <div className={styles.navContainer}>
          <div className={styles.buttonContainer}>
            <button>
              <ReactSVG className={styles.icon} src={photoLibrary} />
            </button>
            <p style={{ color: "#0a84ff" }}>Photothèque</p>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => navigate("new")}>
              <ReactSVG className={styles.iconAdd} src={addButton} />
            </button>
            <p style={{ color: "#AEAEB2" }}>Importer</p>
          </div>
        </div>
      </BottomNav>
    </div>
  );
};

export default PhotosList;
