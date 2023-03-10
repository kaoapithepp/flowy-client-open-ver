export interface IBookingRequestEntity {
    place_id?: string;
    total_bk_seat?: number;
    desk_id?: string;
    selectedTimeSlots?: [];
    status?: string;
    total_bk_hr?: number;

    unit_price?: number;
    total_bk_price?: number;
    pymt_method?: string;
}