const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border')
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    console.log(this.id, tabContentItem)
    //  Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    // remove tab-border class from previous tab
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    // remove tab-border class from previous tab
    tabContentItems.forEach(item => item.classList.remove('show'))
}

tabItems.forEach(item => item.addEventListener('click', selectItem));