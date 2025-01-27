import { Directive, inject, Input, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Directive({
  selector: '[appHasRole]', //**appHasRole
  standalone: true
})
export class HasRoleDirective implements OnInit{
  @Input() appHasRole: string[] = [];
  private accountServie = inject(AccountService);
  private viewContainerRef = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef);

  ngOnInit(): void
  {
    if (this.accountServie.roles()?.some((r: string) => this.appHasRole.includes(r))) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
