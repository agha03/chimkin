import { Toast, ToastHeader, ToastBody } from 'reactstrap';

function ToastNotify() {
  return (
    <div className="p-2 rounded d-flex justify-content-center">
    <Toast >
      <ToastHeader>
        Hot chickens in your area
      </ToastHeader>
      <ToastBody >
        <img src={'./src/assets/crispy-fried.png'} width="300"></img>
      </ToastBody>
    </Toast>
  </div>
  )
}

export default ToastNotify