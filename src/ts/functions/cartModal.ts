export function cartModal() {
  const content = `
<div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Cart</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <ul class="modal-body list-group" id="modal-body"></ul>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Continue shopping
              </button>
              <button type="button" class="btn btn-primary" id="btn-checkout">
                Go to checkout
              </button>
            </div>
          </div>
        </div>`;

  const cartModal: HTMLDivElement = document.getElementById(
    "cartModal"
  ) as HTMLDivElement;

  cartModal.append(content);
}
