import Certify from './Certify.vue'
import CorrectionComment from '@/components/common/CorrectionComment.vue'
import DetailComment from './DetailComment.vue'
import ErrorContact from './ErrorContact.vue'
import OfficeAddresses from './OfficeAddresses.vue'
import StaffPayment from './StaffPayment.vue'
import SummaryCertify from './SummaryCertify.vue'
import SummaryDirectors from './SummaryDirectors.vue'
import SummaryStaffPayment from './SummaryStaffPayment.vue'
import SummaryOfficeAddresses from './SummaryOfficeAddresses.vue'

// NB: importing/exporting Directors gives us weird errors,
// possibly due to some circular dependency, so don't do it

export {
  Certify,
  CorrectionComment,
  DetailComment,
  ErrorContact,
  OfficeAddresses,
  StaffPayment,
  SummaryCertify,
  SummaryDirectors,
  SummaryStaffPayment,
  SummaryOfficeAddresses
}
