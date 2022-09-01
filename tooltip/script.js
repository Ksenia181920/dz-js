const tooltip = function () {

    const tooltips = document.querySelectorAll('[title]');
    if (tooltips.length === 0) return;

    const ownTooltip = document.createElement('div');
    ownTooltip.classList.add('tooltip');


    const removeDefaultTooltip = function (elem) {
        document.body.append(ownTooltip);

        let title = elem.getAttribute('title');
        ownTooltip.style.left = elem.offsetLeft + 'px';
        ownTooltip.style.top = (elem.offsetTop + 50) + 'px';
        ownTooltip.innerHTML = title;
        elem.removeAttribute('title');
    }

    const addDefaultTooltip = function (elem) {
        elem.setAttribute('title', ownTooltip.innerHTML);
        ownTooltip.remove();
    }

    tooltips.forEach(elemTooltip => {

        elemTooltip.addEventListener('mouseover', function() {
            removeDefaultTooltip(elemTooltip);
        })

        elemTooltip.addEventListener('mouseleave', function (){
            addDefaultTooltip(elemTooltip);
        })
    })

}

tooltip();

