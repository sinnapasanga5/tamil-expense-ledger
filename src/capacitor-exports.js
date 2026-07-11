import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

window.__capFilesystem = Filesystem;
window.__capDirectory = Directory;
window.__capShare = Share;
