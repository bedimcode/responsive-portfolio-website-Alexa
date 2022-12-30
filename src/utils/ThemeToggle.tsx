export const ThemeToggle = () => {
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'uil-sun'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton?.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

    // We validate if the user previously chose a topic
    if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton?.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
    }

    function change() {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton?.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    }

    return (
        <>
            <i className="uil uil-moon change-theme" id="theme-button" onClick={change} />
            <div className="nav__toggle" id="nav-toggle">
                <i className="uil uil-apps" />
            </div>
        </>
    )
}