<script src="https://test-checkout.squadinc.co/widget/squad.min.js"></script>;

function SquadPay() {
  const squadInstance = new squad({
    onClose: () => console.log("Widget closed"),
    onLoad: () => console.log("Widget loaded successfully"),
    onSuccess: () => console.log(`Linked successfully`),
    key: "sandbox_pk_e1e0548296b50d11aa1034556f6a04dfd2094f0e77ba",
    //Change key (test_pk_sample-public-key-1) to the key on your Squad Dashboard
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    //Enter amount in Naira or Dollar (Base value Kobo/cent already multiplied by 100)
    currency_code: "NGN",
  });
  squadInstance.setup();
  squadInstance.open();
}
