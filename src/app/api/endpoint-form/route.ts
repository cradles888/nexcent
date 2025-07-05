import { NextResponse, NextRequest } from "next/server";

interface Form {
    name: string;
    organization: string;
    email: string;
}

const forms:Form[] = []

async function sendMessageToTelegram(form: Form) {
    const token = '8187474550:AAFs5ZtLQ7RNh98g8iDY0NWQ776QrPKAbCI';
    const chatId = '5683445240';
    const message = `📝 <b>Пришла новая анкета!</b>
    - Имя: <i>${form.name}</i>
    - Организация: <i>${form.organization}</i>
    - Почта: <i>${form.email}</i>`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        }),
    });

    return response.json();
}

export async function POST(req: NextRequest) {
    const form = await req.json()

    if (!form) {
        return NextResponse.json({"error": "Анкета не долшла до эндпоинта. Анкета: " + JSON.stringify(form)})
    } else {
        forms.push(form)
        await sendMessageToTelegram(form);
        return NextResponse.json({"Успешно": "Анкета передана. Анкета: " + JSON.stringify(form)})
    }
}

export async function GET() {
    return NextResponse.json({ forms });
}