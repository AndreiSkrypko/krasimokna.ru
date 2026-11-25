<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name = trim((string) ($data['name'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$details = trim((string) ($data['details'] ?? ''));
$source = trim((string) ($data['source'] ?? 'Сайт'));
$service = trim((string) ($data['service'] ?? ''));

if ($name === '' || $phone === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Name and phone required']);
    exit;
}

$botToken = '8861334161:AAGdozYZhN6mCf8o0_lAL-4IlbdpmZbWb7U';
$chatId = '6453142710';

$lines = [
    '🆕 Новая заявка — krasimokna.ru',
    '',
    'Источник: ' . $source,
];
if ($service !== '') {
    $lines[] = 'Услуга: ' . $service;
}
$lines[] = 'Имя: ' . $name;
$lines[] = 'Телефон: ' . $phone;
$lines[] = '';
$lines[] = 'Комментарий:';
$lines[] = $details !== '' ? $details : '—';

$text = implode("\n", $lines);

$payload = json_encode([
    'chat_id' => $chatId,
    'text' => $text,
    'disable_web_page_preview' => true,
], JSON_UNESCAPED_UNICODE);

$ch = curl_init("https://api.telegram.org/bot{$botToken}/sendMessage");
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_TIMEOUT => 15,
]);

$response = curl_exec($ch);
$httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode < 200 || $httpCode >= 300) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Telegram error']);
    exit;
}

echo json_encode(['ok' => true]);
