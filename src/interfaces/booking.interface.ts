export interface IBookingEntity {
    user_id?: string;
    place_id?: string;
    desk_id?: string;
    unit_price?: number;
    selectedTimeSlots?: [];
    total_bk_hr?: number;
    total_bk_seat?: number;
    total_bk_price?: number;
    pymt_method?: string;
    status?: string;
    paidAt?: string;
}