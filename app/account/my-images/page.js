import { Suspense } from "react";
import MyImagesList from "../../component/MyImagesList";
import { Spinner } from "react-bootstrap";

export default async function Page() {
  return (
    <div className="content-wrapper">
      <h2 className="my-4">My Images</h2>
      <main>
        <Suspense
          fallback={
            <div className="d-flex align-item-center justify-content-center">
              <Spinner animation="border" variant="dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          }
        >
          <MyImagesList />
        </Suspense>
      </main>
    </div>
  );
}
