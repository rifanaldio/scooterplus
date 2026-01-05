/**
 * Generate WhatsApp URL with formatted message
 */
export const generateWhatsAppUrl = (phoneNumber, message) => {
  // Remove all non-numeric characters
  let formattedPhone = phoneNumber.replace(/[^0-9]/g, '');
  
  // If number starts with 0, replace with 62 (Indonesia country code)
  if (formattedPhone.startsWith('0')) {
    formattedPhone = '62' + formattedPhone.substring(1);
  }
  
  // If number doesn't start with country code, add 62
  if (!formattedPhone.startsWith('62')) {
    formattedPhone = '62' + formattedPhone;
  }
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
};

/**
 * Format package message for WhatsApp
 */
export const formatPackageMessage = (packageData, engineType = '2v') => {
  const { title, subtitle, items, price2v, price3v, addon } = packageData;
  const selectedPrice = engineType === '3v' ? price3v : price2v;
  const engineLabel = engineType === '3v' ? '3V' : '2V';
  
  let message = `Halo, saya tertarik dengan paket *${title}*`;
  
  if (subtitle) {
    message += ` (${subtitle})`;
  }
  
  message += `\n\n*Detail Paket:*\n`;
  
  items.forEach((item) => {
    message += `• ${item}\n`;
  });
  
  message += `\n*Harga untuk engine ${engineLabel}:* Rp ${selectedPrice.toLocaleString('id-ID')}`;
  
  if (addon) {
    message += `\n\n*Addon:* ${addon}`;
  }
  
  message += `\n\nTerima kasih!`;
  
  return message;
};

