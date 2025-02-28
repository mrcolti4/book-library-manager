<?php

namespace App\Enums;

enum BookReadingStatus: string
{
    case UNREAD = 'unread';
    case IN_PROGRESS = 'in_progress';
    case DONE = 'done';
}
