import AppContainer from "../../../components/AppContainer/AppContainer";
import styles from "./Notes.module.scss";

function Notes() {
  return (
    <AppContainer isDarkMode>
      <div className={styles.notesContainer}>Notes</div>
    </AppContainer>
  );
}

export default Notes;
