export function cartModal() {
  const cartModal: HTMLDivElement = document.createElement("div");
  cartModal.classList.add("modal");
  cartModal.tabIndex = -1;
  cartModal.innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title">Cart</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <p>Modal body text goes here.</p>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue shopping</button>
    <button type="button" class="btn btn-primary">Go to checkout</button>
    </div>
    </div>
    </div>`;
}
