const $ = {}
function _createModal(){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal__overlay">
        <div class="modal__window">
            <div class="modal__header">
                <span class="modal__title">Title</span>
                <span class="modal__close">&times;</span>
            </div>
            <div class="modal__body"></div>
            <div class="modal__footer"><button class="modal__close">Ok</button></div>
        </div>
    </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function(options){
    const ANIMATION_SREED = 400
    let closing = folse

    const $modal = _createModal(options)
    return{
        open(){
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
        destroy(){},

    }
}