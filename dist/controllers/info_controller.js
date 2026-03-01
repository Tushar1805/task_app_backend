import { StatusCodes } from "http-status-codes";
const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "Welcome to the API",
        error: {},
        data: {},
    });
};
export default { info };
//# sourceMappingURL=info_controller.js.map