import { StorageSchema } from "../../../config";

export const deserialize = (settings: [StorageSchema, string][]) => {
    if (settings.length !== 2) {
        throw new Error(
            `Expected serialized settings array to have length 2, found ${settings.length}`
        );
    }
    const foundDate = new Date(settings[1][1]);
    const isValidDate = !isNaN(foundDate.getTime());
    return {
        enabled: JSON.parse(settings[0][1]) as boolean,
        // TODO #35 somehow this is in UTC
        scheduledTime: isValidDate ? foundDate : new Date(0),
    };
};
