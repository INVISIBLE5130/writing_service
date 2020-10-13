window.addEventListener("load", () => {
    if (window.innerWidth < 1023) {
        document.querySelector('.main-companion-main_block-right').style.display = 'unset'
        document.querySelectorAll('.main-companion-main_block-right-img_block').forEach(item => {
            item.style.width = 'unset'
        })
    } else {
        document.querySelector('.main-companion-main_block-right').style.display = 'flex'
        document.querySelectorAll('.main-companion-main_block-right-img_block').forEach(item => {
            item.style.width = '32%'
        })
    }
    nextScreen(1)
})

let screen = 1

function backScreen() {
    screen -= 1

    switch (screen) {
        case 1:
            document.querySelector('.main-companion-main_block-left-title-name').innerHTML = 'Lisa Haesen'
            document.querySelector('.main-companion-main_block-left-comment').innerHTML = '”Glad to be a part of' +
                ' our company and a true professional in essay writing, paper editing and creating interesting and burning ' +
                'topics on order we get from our clients. Thanks to our clients, we deal with burning orders, specific and ' +
                'rare topics, and I am sure were doing well and move towards a successful outcome.”'
            document.querySelector('.lisa').style.opacity = '1'
            document.querySelector('.michelle').style.opacity = '0.5'
            document.querySelector('.eric').style.opacity = '0.5'
            if (window.innerWidth < 1023) {
                document.querySelector('.lisa').style.display = 'unset'
                document.querySelector('.michelle').style.display = 'none'
                document.querySelector('.eric').style.display = 'none'
            }

            document.querySelector('.main-companion-main_block-left-buttons_left').style.display = 'none'
            document.querySelector('.main-companion-main_block-left-buttons_right').style.display = 'unset'
            break;
        case 2:
            document.querySelector('.main-companion-main_block-left-title-name').innerHTML = 'Michelle Boyer'
            document.querySelector('.main-companion-main_block-left-comment').innerHTML = '”Being a professional ' +
                'writer made me a creative thinker and a reliable friend in professional academic writing. BuyEssayFriend ' +
                'faces different issues every day and I and the whole team develop stress tolerance as a key professional ' +
                'quality necessary for successful cooperation."'
            document.querySelector('.lisa').style.opacity = '0.5'
            document.querySelector('.michelle').style.opacity = '1'
            document.querySelector('.eric').style.opacity = '0.5'
            if (window.innerWidth < 1023) {
                document.querySelector('.lisa').style.display = 'none'
                document.querySelector('.michelle').style.display = 'unset'
                document.querySelector('.eric').style.display = 'none'
            }
            break;
        default:
            screen = 1
            break;
    }
}

function nextScreen(number) {
    if (number === 1) {
        screen = 1
    } else {
        screen += 1
    }

    switch (screen) {
        case 1:
            document.querySelector('.main-companion-main_block-left-title-name').innerHTML = 'Lisa Haesen'
            document.querySelector('.main-companion-main_block-left-comment').innerHTML = '”Glad to be a part of' +
                ' our company and a true professional in essay writing, paper editing and creating interesting and burning ' +
                'topics on order we get from our clients. Thanks to our clients, we deal with burning orders, specific and ' +
                'rare topics, and I am sure were doing well and move towards a successful outcome.”'
            document.querySelector('.lisa').style.opacity = '1'
            document.querySelector('.michelle').style.opacity = '0.5'
            document.querySelector('.eric').style.opacity = '0.5'
            if (window.innerWidth < 1023) {
                document.querySelector('.lisa').style.display = 'unset'
                document.querySelector('.michelle').style.display = 'none'
                document.querySelector('.eric').style.display = 'none'
            }

            document.querySelector('.main-companion-main_block-left-buttons_left').style.display = 'none'
            break;
        case 2:
            document.querySelector('.main-companion-main_block-left-title-name').innerHTML = 'Michelle Boyer'
            document.querySelector('.main-companion-main_block-left-comment').innerHTML = '”Being a professional ' +
                'writer made me a creative thinker and a reliable friend in professional academic writing. BuyEssayFriend ' +
                'faces different issues every day and I and the whole team develop stress tolerance as a key professional ' +
                'quality necessary for successful cooperation.”'
            document.querySelector('.lisa').style.opacity = '0.5'
            document.querySelector('.michelle').style.opacity = '1'
            document.querySelector('.eric').style.opacity = '0.5'
            if (window.innerWidth < 1023) {
                document.querySelector('.lisa').style.display = 'none'
                document.querySelector('.michelle').style.display = 'unset'
                document.querySelector('.eric').style.display = 'none'
            }

            document.querySelector('.main-companion-main_block-left-buttons_left').style.display = 'unset'
            break;
        case 3:
            document.querySelector('.main-companion-main_block-left-title-name').innerHTML = 'Eric Ward'
            document.querySelector('.main-companion-main_block-left-comment').innerHTML = '“Our Quality Department ' +
                'carefully assesses writers’ knowledge before they begin writing on this or that particular subject. ' +
                'Practically all writers major in at least in 3-5 disciplines. However, we also have more narrowly-focused ' +
                'specialists. Many of them gradually enter adjacent disciplines, which helps broaden their expertise in ' +
                '6-8 or more subjects.”'
            document.querySelector('.lisa').style.opacity = '0.5'
            document.querySelector('.michelle').style.opacity = '0.5'
            document.querySelector('.eric').style.opacity = '1'
            if (window.innerWidth < 1023) {
                document.querySelector('.lisa').style.display = 'none'
                document.querySelector('.michelle').style.display = 'none'
                document.querySelector('.eric').style.display = 'unset'
            }

            document.querySelector('.main-companion-main_block-left-buttons_right').style.display = 'none'
            break;
        default:
            screen = 1
            break;
    }
}