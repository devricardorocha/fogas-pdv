import { Service, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Service()
export class IconRegistry {
    private iconRegistry = inject(MatIconRegistry);
    private sanitizer = inject(DomSanitizer);

    registerIcons() {
        this.iconRegistry.addSvgIcon(
            'fogas-logo',
            this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fogas.svg')
        );
    }

}
