export default function Notification() {
  return (
    <div class="toast position-absolute">
      <div class="toast-body">
        Hello, world! This is a toast message.
        <div class="mt-2 pt-2 border-top">
          <button type="button" class="btn btn-primary btn-sm">
            Take action
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="toast"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
