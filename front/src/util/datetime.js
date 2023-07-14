export const getPreviousMonday = () => {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const difference = (currentDayOfWeek + 6) % 7;
    today.setDate(today.getDate() - difference);
    return today;
};

export const getPreviousTueday = () => {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const difference = (currentDayOfWeek + 5) % 7;
    today.setDate(today.getDate() - difference);
    return today;
};

export const getPreviousWednesday = () => {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const difference = (currentDayOfWeek + 4) % 7;
    today.setDate(today.getDate() - difference);
    return today;
};
export const getPreviousThursday = () => {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const difference = (currentDayOfWeek + 3) % 7;
    today.setDate(today.getDate() - difference);
    return today;
};
export const getPreviousFriday = () => {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const difference = (currentDayOfWeek + 2) % 7;
    today.setDate(today.getDate() - difference);
    return today;
};

export const getdat = () => {
    const today = new Date();
    const day = today.getDay(1);
};
