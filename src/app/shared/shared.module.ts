import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TextFieldModule } from '@angular/cdk/text-field';
import { TranslocoHttpLoader } from 'app/transloco-loader';
import { TranslocoModule, provideTransloco } from '@ngneat/transloco';
import {MatListModule} from '@angular/material/list';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatCardModule,
        MatStepperModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatTooltipModule,
        CdkStepperModule,
        MatSlideToggleModule,
        MatRadioModule,
        TextFieldModule,
        TranslocoModule,
        MatListModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatCardModule,
        MatStepperModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatTooltipModule,
        CdkStepperModule,
        MatSlideToggleModule,
        MatRadioModule,
        TextFieldModule,
        TranslocoModule,
        MatListModule,
    ],
    providers: [
      provideTransloco({
        config: {
            availableLangs: ['en', 'es'],
            defaultLang: 'es',
            reRenderOnLangChange: true,
            prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
    }),
    ],
})
export class SharedModule {}