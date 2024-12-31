import { useConfStore } from "../../useConfStore";

const AddedPhoto = () => {

    const {
        profilePhoto,
        setProfilePhoto,
    } = useConfStore();

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center overflow-hidden rounded-radius-12">
                <img src={profilePhoto} alt="profile photo" className="w-12" />
            </div>
            <div className="flex items-center justify-center gap-6 text-preset-7 text-neutral-300">
                <input type="button" value="Remove Image" className="bg-transparent border-none" />
                <input type="button" value="Change Image" className="bg-transparent border-none"  />
            </div>
        </div>
    );
}

export default AddedPhoto;