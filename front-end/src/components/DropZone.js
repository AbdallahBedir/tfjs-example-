import { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import useHttp, { postPhoto } from "../hooks/useHttp";
import catIcon from "../assets/catIcon";

/// Styles
const useStyles = makeStyles(theme =>
  createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
    active: {
      border: "dashed",
      borderColor: "red",
      backgroundImage: "none",
    },
    dropZone: {
      backgroundColor: "",
    },
    dropZoneIcon: {
      display: "none",
    },
    previewGridContainer: { marginTop: "1rem" },
  })
);

const DropZone = () => {
  const previewGridProps = { container: { justify: "center" } };

  //UI State
  const [fileObjects, setFileObjects] = useState([]);
  const [intialState, setIntialState] = useState(true);
  // networking State
  const { sendRequest, status } = useHttp(postPhoto);

  useEffect(() => {
    if (!intialState) {
      sendRequest(fileObjects[0])
    }
  }, [fileObjects]);

  // handling drag and drop methods
  const handleAddingFiles = newFileObjs => {
    console.log("onAdd", newFileObjs);
    setIntialState(false);
    //setFileObjects([].concat(fileObjects, newFileObjs));
    setFileObjects([].concat(newFileObjs));
  };

  const handleDeletingFiles = deleteFileObj => {
    console.log("triggerd : handleDeletingFiles");
    setFileObjects(latestFiles => {
      let updatedFiles = [...latestFiles];
      return updatedFiles.filter(file => {
        return deleteFileObj.file.name !== file.file.name;
      });
    });
  };

  // loading Component
  const loading = (
    <p
      style={{
        margin: "3rem auto",
        textAlign: "center",
      }}
    >
      loading ....
    </p>
  );

  // drop Zone Icon
  const isDropZoneEmpty = fileObjects.length === 0;
  let icon;
  if (isDropZoneEmpty) {
    icon = catIcon;
  } else {
    icon = null;
  }

  const classes = useStyles();
  return (
    <Box>
      <DropzoneAreaBase
        // handling drag n' drop
        onDelete={handleDeletingFiles}
        onAdd={handleAddingFiles}
        fileObjects={fileObjects}
        acceptedFiles={["image/*"]}
        // adding main Styles
        Icon={icon}
        filesLimit={1}
        dropzoneText={isDropZoneEmpty ? "Drag your image here " : ""}
        dropzoneClass={classes.dropZone}
        classes={{ active: classes.active, icon: classes.dropZoneIcon }}
        //handling preview and adding styles
        previewGridClasses={{ container: classes.previewGridContainer }}
        previewGridProps={previewGridProps}
        showPreviewsInDropzone={true}
        showFileNames={true}
      />
      {status === "pending" && loading}
    </Box>
  );
};
export default DropZone;
