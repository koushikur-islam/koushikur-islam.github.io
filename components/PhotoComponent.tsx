import { Image } from "antd";

export default function PhotoComponent() {
  const photos: string[] = [
    "/photos/optimize-1.jpg",
    "/photos/optimize-2.jpg",
    "/photos/optimize-3.JPG",
    "/photos/optimize-4.jpg",
    "/photos/smartiot-1.jpg",
    "/photos/smartiot-2.jpg",
    "/photos/smartiot-3.jpg",
    "/photos/smartiot-4.JPG",
    "/photos/lab-1.JPG",
    "/photos/lab-2.jpg",
    "/photos/lab-3.jpg",
    "/photos/lab-4.jpg",
    "/photos/wsu-1.JPEG",
    "/photos/aiub-1.JPG",
  ];

  return (
    <div className="pt-10">
      <div className="limited-box">
        <div
          className="uppercase text-lg font-semibold pb-3 ml-5 mt-5 border-b border-slate-700"
          style={{ color: "var(--primary-color)" }}
        >
          Photos
        </div>

        <div className="px-3 ml-4">
          <div className="my-5">
            <ul className="photo-grid mt-3">
              {photos.map((src, index) => (
                <li key={index} className="photo-item">
                  <div className="photo-image-container">
                    <Image
                      src={src}
                      alt="Photo"
                      preview={true}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}