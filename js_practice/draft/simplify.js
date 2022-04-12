import { includes } from 'lodash'

const xxxArray = ['ATM', 'COD']

if (!includes(xxxArray, paymentMethod)) {
    disabledForm = false
}

if (isNotEmptyObject(orderCancellation)) {
    const cancellationStatus = orderCancellation?.requests[0]?.cancellationStatus
    if (cancellationStatus === 'AwaitingRefundApproval') {
        if ((paymentMethod === 'ATM' || paymentMethod === 'COD') && isBandAndReasonUpdatable) {
            disabledForm = false
        }
        else {
            disabledForm = true
        }
    }
    else if (cancellationStatus === 'AwaitingRefund') {
        if (isBandAndReasonUpdatable) {
            disabledForm = false
        }
        else {
            disabledForm = true
        }
    }
}

////////////////////////////////////////////////////////////////

// import { includes } from 'lodash'

// const xxxArray = ['ATM', 'COD']

if (!includes(xxxArray, paymentMethod)) {
    disabledForm = false
}

if (isNotEmptyObject(orderCancellation)) {
    const cancellationStatus = orderCancellation?.requests[0]?.cancellationStatus
    switch (cancellationStatus) {
    case 'AwaitingRefundApproval': {
        includes(xxxArray, paymentMethod) && isBandAndReasonUpdatable ? false : true
        break
    }
    case 'AwaitingRefund': {
        disabledForm = isBandAndReasonUpdatable ? false : true
        break
    }
    }
}