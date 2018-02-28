export const rem = (num) => {
    // return num / 24 * parseInt($('html').css('font-size'))
    return $(window).width() * num / 640
}
