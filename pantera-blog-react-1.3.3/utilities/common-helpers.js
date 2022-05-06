export const stickyHeader = () => {
    let number =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    const header = document.getElementById('header-sticky');
    if (header !== null) {
        if (number >= 300) {
            header.classList.add('header--sticky');
        } else {
            header.classList.remove('header--sticky');
        }
    }
};
export function convertArrayToString(payload) {
    let result = '[';
    payload.forEach((character, index) => {
        if (index < payload.length - 1) {
            result = result + '"' + character + '",';
        } else {
            result = result + '"' + character + '"';
        }
    });
    result += ']';
    return result;
}
