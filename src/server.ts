import dotenv from 'dotenv';
dotenv.config();
import { application } from './application';

const runServer = async (): Promise<void> => {
    const port = process.env.PORT || 8080;
    try {
        const server = await application.listen(port);
        console.log(`Application running on ${server}`);
    } catch (error) {
        console.error(error);
        await application.close();
    }
};

export default runServer();
