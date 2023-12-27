import multer from "multer";
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://mernstack:1234@ac-9adx8td-shard-00-00.zclzvlx.mongodb.net:27017,ac-9adx8td-shard-00-01.zclzvlx.mongodb.net:27017,ac-9adx8td-shard-00-02.zclzvlx.mongodb.net:27017/?ssl=true&replicaSet=atlas-cd0mfc-shard-0&authSource=admin&retryWrites=true&w=majority`, options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.mimeType) === -1) 
            {
                return`${Date.now()}-file-${file.originalname}`;
            }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
});

export default multer({storage});