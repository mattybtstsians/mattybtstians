import { useRef } from 'react';

const safeDocument = typeof document !== 'undefined' ? document : {};

export default () => {
    const scrollBlocked = useRef();
    const html = safeDocument.documentElement;
    const { body } = safeDocument;

    const blockScroll = () => {
        html.style.position = 'relative'; /* [1] */
        html.style.overflow = 'hidden'; /* [2] */
        body.style.position = 'relative'; /* [1] */
        body.style.overflow = 'hidden'; /* [2] */

        scrollBlocked.current = true;
    };

    const allowScroll = () => {
        html.style.position = '';
        html.style.overflow = 'scroll';
        body.style.position = '';
        body.style.overflow = 'scroll';

        scrollBlocked.current = false;
    };

    return [blockScroll, allowScroll];
};