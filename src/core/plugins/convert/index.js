export default async function convertToCode(payload) {
  try {
    const response = await fetch('/convert-to-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending request to /convert-to-code:', error);
    throw error;
  }
}
