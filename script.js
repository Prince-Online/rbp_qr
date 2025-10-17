document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const amountInput = document.getElementById('amountInput');
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const amountDisplay = document.getElementById('amountDisplay');
    const amountValue = document.getElementById('amountValue');
    const qrCode = document.getElementById('qrCode');
    const upiId = "createprincemahto-2@okaxis";

    generateBtn.addEventListener('click', function () {
        const amount = amountInput.value;
        let qrValue;

        if (amount && amount > 0) {
            amountValue.textContent = amount;
            amountDisplay.style.display = 'block';
            document.getElementById('diwaliIcons').style.display = 'none';
            qrValue = `upi://pay?pa=${upiId}&am=${amount}&pn=Rahul Book Point&cu=INR`;
        } else {
            amountDisplay.style.display = 'none';
            document.getElementById('diwaliIcons').style.display = 'flex';
            qrValue = `upi://pay?pa=${upiId}&pn=Rahul Book Point&cu=INR`;
            createDiwaliIcons();
        }

        qrCode.innerHTML = '';
        new QRCode(qrCode, {
            text: qrValue,
            width: 140,
            height: 140,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        qrCodeContainer.classList.add('show');
    });

    downloadBtn.addEventListener('click', function () {
        const amount = amountInput.value || 'no-amount';
        const qrWrapper = document.getElementById('qrWrapper');
        html2canvas(qrWrapper, { useCORS: true }).then(function (canvas) {
            const link = document.createElement('a');
            link.download = `${amount}-qrcode.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    function createDiwaliIcons() {
        const diwaliContainer = document.getElementById('diwaliIcons');
        diwaliContainer.innerHTML = '';

        const diyaSvg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="50" cy="70" rx="25" ry="15" fill="#d4a574"/>
                    <path d="M 30 70 Q 30 50 50 45 Q 70 50 70 70" fill="#daa76d"/>
                    <circle cx="50" cy="35" r="12" fill="#ffd700"/>
                    <circle cx="50" cy="32" r="8" fill="#ffeb3b"/>
                    <circle cx="50" cy="30" r="4" fill="#ff6b00"/>
                </svg>`;

        const firecracker = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="50" width="20" height="40" fill="#ff1493" rx="5"/>
                    <circle cx="45" cy="40" r="6" fill="#ff6b00"/>
                    <circle cx="55" cy="35" r="6" fill="#ffd700"/>
                    <circle cx="50" cy="28" r="6" fill="#ff1493"/>
                    <line x1="50" y1="20" x2="45" y2="10" stroke="#ffd700" stroke-width="2"/>
                    <line x1="50" y1="20" x2="55" y2="8" stroke="#ff6b00" stroke-width="2"/>
                </svg>`;

        const flower = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="8" fill="#ffd700"/>
                    <circle cx="50" cy="25" r="10" fill="#ff1493"/>
                    <circle cx="75" cy="35" r="10" fill="#ff6b00"/>
                    <circle cx="75" cy="65" r="10" fill="#ff1493"/>
                    <circle cx="50" cy="75" r="10" fill="#ff6b00"/>
                    <circle cx="25" cy="65" r="10" fill="#ff1493"/>
                    <circle cx="25" cy="35" r="10" fill="#ff6b00"/>
                </svg>`;

        diwaliContainer.innerHTML = diyaSvg + firecracker + flower;
    }
});