import {
    GITHUB_LINK,
    LINKEDIN_LINK,
    MAIL_LINK,
    TELEGRAM_LINK,
} from "@/lib/consts";
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon } from "lucide-react";
import Link from "next/link";

const FooterLinks = async () => {
    return (
        <div className='flex gap-4'>
            <Link
                href={LINKEDIN_LINK}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-gray-800'
            >
                <LinkedinIcon className='w-6 h-6' />
            </Link>
            <Link
                href={GITHUB_LINK}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-gray-800'
            >
                <GithubIcon className='w-6 h-6' />
            </Link>
            <Link
                href={TELEGRAM_LINK}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-gray-800'
            >
                <SendIcon className='w-6 h-6' />
            </Link>
            <Link
                href={`mailto:${MAIL_LINK}`}
                className='text-gray-600 hover:text-gray-800'
            >
                <MailIcon className='w-6 h-6' />
            </Link>
        </div>
    );
};

export default FooterLinks;
