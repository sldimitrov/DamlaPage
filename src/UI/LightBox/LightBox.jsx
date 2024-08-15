import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import {
  Captions,
  Download,
  Fullscreen,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";

export default function LightBox({ self, slides }) {
  const [open, setOpen] = useState();

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={() => setOpen(true)}
        className="text-black font-sans text-xl md:text-3xl bg-gray-200 rounded-md hover:bg-gray-300 w-96 mt-4"
      >
        Отвори галерия
        <Lightbox
          plugins={[Captions, Download, Fullscreen]}
          captions={{
            showToggle: true,
            descriptionTextAlign: "end",
          }}
          open={open}
          slides={slides}
          close={() => setOpen(false)}
        />
        <img
          className="rounded-sm hover:shadow-2xl"
          src={self}
          alt="author with its book - Almanah"
        />
      </button>
    </div>
  );
}