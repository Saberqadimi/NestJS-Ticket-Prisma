export function getTypeFile(mime: string): string {
    if (mime.startsWith('image/')) return 'image';
    if (mime.startsWith('video/')) return 'video';
    if (mime.startsWith('audio/')) return 'audio';
    if (mime === 'application/zip') return 'zip';
    if (mime === 'application/vnd.ms-excel' || mime === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        return 'excel';
    }
    if (mime === 'application/pdf') return 'pdf';
    return 'other';
}
