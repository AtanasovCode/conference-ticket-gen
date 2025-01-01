import { useConfStore } from "../../useConfStore";
import upload from '../assets/images/icon-upload.svg';
import info from '../assets/images/icon-info.svg';

const AddNewPhoto = () => {

    const {
        profilePhoto,
        setProfilePhoto,
        photoTooLarge,
        setPhotoTooLarge,
        photoErr,
        setPhotoErr,
    } = useConfStore();

    return (
        <div className="w-full">
            <div
                className="w-full relative bg-faded-white border-2 border-dashed border-neutral-500 rounded-radius-12 
                flex flex-col items-center justify-center gap-4 p-6"
            >
                <input
                    type="file"
                    className="absolute w-full h-full opacity-0"
                    accept=".jpg,.jpeg,.png,.webp"
                    onChange={(e) => {
                        const file = e.target.files[0]; // Get the selected file
                        if (file) {
                            const maxSizeInBytes = 500 * 1024; // 500kb in bytes
                            if (file.size > maxSizeInBytes) {
                                setPhotoTooLarge(true);
                                e.target.value = ""; // Clear the input
                            } else {
                                setPhotoErr(false);
                                setProfilePhoto(file);
                            }
                        }
                    }}
                />
                <div className="w-full flex items-center justify-center">
                    <img src={upload} alt="upload file icon" className="w-10" />
                </div>
                <label htmlFor="profile photo upload" className="text-preset-6 text-neutral-300">
                    Drag and drop or click to upload
                </label>
            </div>
            <div className="w-full text-preset-7 text-neutral-300 mt-2">
                {
                    !photoTooLarge && !photoErr ? (
                        <div className="flex items-center justify-start gap-2">
                            <span><img src={info} alt="info icon" className="w-6" /></span>
                            <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
                        </div>
                    ) : (
                        photoTooLarge ? (
                            <div className="flex items-center justify-start gap-2">
                                <span><img src={info} alt="info icon" className="w-6" /></span>
                                <span>Please upload a photo that is less than 500kb</span>
                            </div>
                        ) : (
                            <div className="flex items-center justify-start gap-2">
                                <span><img src={info} alt="info icon" className="w-6" /></span>
                                <span>Please upload an avatar</span>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default AddNewPhoto;