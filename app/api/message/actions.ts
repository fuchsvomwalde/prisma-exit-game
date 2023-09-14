import "server-only";

export async function sendMessage() {
  const encodedParams = new URLSearchParams();
  encodedParams.set("username", "temp-idk-test-dynamic");
  encodedParams.set("key", "1B490066-EA03-E39A-A18C-C4868E45CFAE");
  encodedParams.set("senderid", "PRISMA");
  encodedParams.set("message", "Test message here.");
  encodedParams.set("sms", "+4915773819880");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "0b1d7d6ac7msh93daae16c5cf3bfp1de34ejsnfa8f9934083d",
      "X-RapidAPI-Host": "inteltech.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await fetch(
      "https://inteltech.p.rapidapi.com/send.php",
      options
    );
    return { status: response.status, statusText: response.statusText };
  } catch (error) {
    return error;
  }
}
