import PhotoNew from "./PhotoNew/PhotoNew";
import PhotosList from "./PhotosList/PhotosList";
import { ImageProps } from "../../../store/types";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

const sortImages = (v: ImageProps[]) =>
  v.sort((a, b) => a.createdAt - b.createdAt);

const Photos = () => {
  const [data, setData] = useState<ReadonlyArray<ImageProps>>([]);
  const navigate = useNavigate();

  const onNew = (data: ImageProps) => {
    console.log("onNew", data);
    setData((v) => sortImages([...v, data]));
    navigate("/photos/", { replace: true });
  };

  return (
    <Routes>
      <Route index element={<PhotosList data={data} />} />
      <Route path="new" element={<PhotoNew onDone={onNew} />} />
    </Routes>
  );
};

export default Photos;
