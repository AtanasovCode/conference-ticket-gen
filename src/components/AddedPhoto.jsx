import { useConfStore } from "../../useConfStore";

const AddedPhoto = () => {

    const {
        profilePhoto,
        setProfilePhoto,
    } = useConfStore();

    const removeImage = () => {
        setProfilePhoto("");
    }

    return (
        <div className="w-full relative bg-faded-white border-2 border-dashed border-neutral-500 rounded-radius-12 
                flex flex-col items-center justify-center gap-4 p-6">
            <div className="flex items-center justify-center overflow-hidden rounded-radius-4">
                {profilePhoto && (
                    <img
                        src={profilePhoto instanceof File ? URL.createObjectURL(profilePhoto) : profilePhoto}
                        alt="Uploaded preview"
                        className="w-16"
                    />
                )}

            </div>
            <div className="flex items-center justify-center gap-6 text-preset-7 text-neutral-300">
                <input
                    type="button"
                    value="Remove Image"
                    className="bg-faded-white border-none p-3 rounded-radius-4 cursor-pointer"
                    onClick={() => removeImage()}
                />
                <div className="relative p-3 rounded-radius-4 cursor-pointer bg-faded-white">
                    <input
                        type="button"
                        value="Change Image"
                        className="w-full border-none"
                    />
                    <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".jpg,.jpeg,.png,.webp"
                        onChange={(e) => {
                            const file = e.target.files[0]; // Get the selected file
                            if (file) {
                                const maxSizeInBytes = 500 * 1024; // 500kb in bytes
                                if (file.size > maxSizeInBytes) {
                                    setPhotoTooLarge(true);
                                    e.target.value = ""; // Clear the input
                                } else {
                                    setProfilePhoto(file);
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddedPhoto;