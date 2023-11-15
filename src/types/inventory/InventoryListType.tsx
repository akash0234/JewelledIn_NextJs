// Define types for Prdmst and Root
export type InventoryListType = {
    prdmst: Prdmst[];
};

export type PrcTim = {
    Ticks: number
    Days: number
    Hours: number
    Milliseconds: number
    Minutes: number
    Seconds: number
    TotalDays: number
    TotalHours: number
    TotalMilliseconds: number
    TotalMinutes: number
    TotalSeconds: number
}

export type Prdmst = {
    _id: number
    actv: string
    invcod: string
    descr1: string
    descr2: string
    unit: string
    frac: number
    cunit: string
    cfract: number
    cat?: string
    locn: string
    sublocn: number
    cst_cntr?: string
    max_lvl: number
    ord_lvl: number
    saf_lvl: number
    cur_mktrt: number
    cur_mktrtdt: string
    std_rt: number
    opn_rt: number
    lst_pur_rt: number
    lst_sal_rt: number
    lst_pur_dt: string
    lst_isu_dt: string
    bol_dt: string
    opn_stk: number
    pcs_opn_stk: number
    gross_opn_stk: number
    pcs_on_ord: number
    qty_cmt: number
    gross_qty_cmt: number
    pcs_cmt: number
    qty_pip: number
    gross_qtty_pip: number
    pcs_pip: number
    prc_tim: PrcTim
    mfg_partno?: string
    taxable: string
    container: string
    createdate: string
    init?: string
    mdate: string
    ean?: string
    gl_debit: string
    gl_credit: string
    item_type: string
    dopn_rt: number
    dstd_rt: number
    card_layout: number
    HSN_code: string
    SKU?: string
    coid: string
    unique_mst: string
    Session_id: string
    Count: number
    // ... rest of the Prdmst properties
};

