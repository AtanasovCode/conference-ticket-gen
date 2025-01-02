import { useConfStore } from '../../useConfStore';

import AddedPhoto from './AddedPhoto';
import AddNewPhoto from './AddNewPhoto';

const PhotoInput = () => {

    const {
        profilePhoto,
    } = useConfStore();

    return (
        <div className="flex flex-col items-center justify-center w-full gap-4">
            <div className="text-preset-5 w-full text-left">Upload Avatar</div>
            {
                profilePhoto ?
                <AddedPhoto />
                :
                <AddNewPhoto />
            }
        </div>
    );
}

export default PhotoInput;