const navigateToTop = () => {
    window.scrollTo(0, 0);
};

const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
};

export { navigateToTop, validateEmail };
