import AppContainer from "../../../../components/AppContainer/AppContainer";
import chevronLeft from "/svg/chevronLeft.svg";
import styles from "./PhotoNew.module.scss";
import { ImageProps } from "../../../../store/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactSVG } from "react-svg";
import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";

const PhotoNew = ({
  data,
  onDone,
}: {
  data?: ImageProps;
  onDone?: (data: ImageProps) => void;
}) => {
  const navigate = useNavigate();
  const newId = useId();
  const [images, setImages] = useState(data?.images || "");
  const regex =
    /https:\/\/[^\s(["<,>/]*\/[^\s[",><]*(.png|.jpg|.jpeg)(\?[^\s[",><]*)?/g;

  function handleChange(e: any) {
    setImages(e.target.value);
  }

  const onSubmit = () => {
    const now = new Date().getTime();
    const newNote = {
      id: newId,
      createdAt: now,
      ...(data ? data : {}),
      images,
      editedAt: now,
    };

    onDone?.(newNote);
  };

  return (
    <AppContainer>
      <div className={styles.photosNewContainer}>
        <div className={styles.backContainer} onClick={() => navigate(-1)}>
          <ReactSVG className={styles.backIcon} src={chevronLeft} />
          <p className={styles.backTitle}>Photothèque</p>
        </div>

        <h2 className={styles.appName}>Import</h2>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            placeholder="Link here..."
            type="url"
            onChange={handleChange}
            style={{
              border: images.match(regex)
                ? "transparent"
                : images.length > 0
                ? "1px solid #FF453A"
                : "transparent",
            }}
          />
        </div>

        {images ? (
          regex.test(images) ? (
            <div className={styles.previewContainer}>
              <div className={styles.imageContainer}>
                <LazyLoadImage
                  className={styles.image}
                  src={images}
                  alt={images}
                />
              </div>
              <p style={{ fontSize: "7px", width: "65%", textAlign: "center" }}>
                This is a preview of the image, it may not be displayed
                correctly.
              </p>

              <div className={styles.imageActions}>
                <button onClick={onSubmit}>Add</button>
                <button style={{ background: "#ff453a" }}>Delete</button>
              </div>
            </div>
          ) : (
            <div className={styles.invalidLink}>Not a valid link</div>
          )
        ) : (
          <div className={styles.emptyContainer}>
            <div className={styles.imageBorder}>
              <span className={styles.titleImageBorder}>Image Preview.</span>
            </div>

            <p className={styles.emptyText}>
              Paste a link to an image to preview it here and add it.
            </p>
          </div>
        )}
      </div>
    </AppContainer>
  );
};

export default PhotoNew;
