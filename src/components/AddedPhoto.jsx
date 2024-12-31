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
            <div className="flex items-center justify-center overflow-hidden rounded-radius-12">
                {profilePhoto && (
                    <img
                        src={profilePhoto instanceof File ? URL.createObjectURL(profilePhoto) : profilePhoto}
                        alt="Uploaded preview"
                        className="w-24 h-24 object-cover rounded-full"
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
                <input
                    type="button"
                    value="Change Image"
                    className="bg-faded-white border-none p-3 rounded-radius-4 cursor-pointer"
                />
            </div>
        </div>
    );
}

export default AddedPhoto;