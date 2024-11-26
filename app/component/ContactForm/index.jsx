"use-client";

export default function ContactForm() {
  return (
    <form
      action=""
      style={{ backgroundColor: "#f3f3f3" }}
      className=" p-4 rounded-3
    "
    >
      <h3 className="text-center">Contact form</h3>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Name
        </label>
        <input type="text" class="form-control" id="exampleFormControlInput1" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Message
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </form>
  );
}
