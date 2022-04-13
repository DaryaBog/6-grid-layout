const $ = {}
function _createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal__overlay" data-close="true">
        <div class="modal__window">
            <div class="modal__header">
                <span class="modal__title">Information about the sword</span>
                <span class="modal__close" data-close="true">&times;</span>
            </div>
            <div class="modal__body" data-content>
            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function(options){
    const ANIMATION_SREED = 400
    let closing = false
    let destroyed = false
    const $modal = _createModal(options)

    const modal = {
        open(){
            destroyed && console.log('Modal is destroyed')
            !closing && $modal.classList.add('open')
        },
        close(){
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(()=>{
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SREED)
        },
    }

    const listener = event => {
        if (event.target.dataset.close){
            modal.close()
        }
    }

    $modal.addEventListener('click', listener)
    return Object.assign(modal,{
        destroy(){
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        },
        setContent(html){
            $modal.querySelector('[data-content]').innerHTML = html
        },
    })
}