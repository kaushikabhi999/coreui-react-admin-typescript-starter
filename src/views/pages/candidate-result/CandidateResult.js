import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { states } from '../../../public/states'
import CIcon from '@coreui/icons-react'
import { cilPencil } from '@coreui/icons'
import {
  CButton,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormCheck,
  CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import { candidates } from '../../../public/candidates'
import { cities } from '../../../public/cities'

function CandidateResult() {
  const [visible, setVisible] = useState(false)
  const [stateId, setStateId] = useState(14)
  const [cityId, setCityId] = useState(6)
  const [formStateId, setFormStateId] = useState(undefined)
  const [formCityId, setFormCityId] = useState(undefined)
  const [formCandId, setFormCandId] = useState(undefined)

  const columns = [
    {
      name: 'ID',
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Party',
      selector: (row) => row.party,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: 'Edit',
      cell: (row) => (
        <CIcon
          icon={cilPencil}
          size="custom-size"
          height={20}
          width={20}
          onClick={() => {
            setVisible(true)
          }}
          customClassName="nav-icon cursor-pointer"
        />
      ),
    },
  ]

  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-start pb-4">
        <CDropdown>
          <CDropdownToggle color="primary" variant="outline">
            {states.find((state) => state.id === stateId).state}
          </CDropdownToggle>
          <CDropdownMenu className="dropdown-height">
            {states.map((state) => (
              <CDropdownItem
                key={state.short_code}
                onClick={() => {
                  setStateId(state.id)
                }}
              >
                {state.state}
              </CDropdownItem>
            ))}
          </CDropdownMenu>
        </CDropdown>
        <div className="mx-2" />
        <CDropdown>
          <CDropdownToggle color="primary" variant="outline">
            {cities.find((city) => city.id === cityId && city.stateId === stateId)?.city ??
              'Constituency'}
          </CDropdownToggle>
          <CDropdownMenu className="dropdown-height">
            {cities
              .filter((city) => city.stateId === stateId)
              .map((city) => (
                <CDropdownItem
                  key={city.city}
                  onClick={() => {
                    setCityId(city.id)
                  }}
                >
                  {city.city}
                </CDropdownItem>
              ))}
          </CDropdownMenu>
        </CDropdown>
      </div>
      <DataTable columns={columns} data={candidates.filter((cand) => cand.cityId === cityId)} />
      <CModal visible={visible} aria-labelledby="LiveDemoExampleLabel">
        <CModalHeader closeButton={false}>
          <CModalTitle id="LiveDemoExampleLabel">Update Result</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm noValidate validated={validated} onSubmit={handleSubmit}>
            <CRow className="pb-3">
              <CCol md={12}>
                <CFormSelect
                  value={formStateId}
                  onChange={(e) => console.log(e)}
                  aria-label="Select State"
                  options={[
                    'Select State',
                    ...states.map((state) => ({ label: state.state, value: state.id })),
                  ]}
                />
              </CCol>
            </CRow>
            <CRow className="pb-3">
              <CCol md={12}>
                <CFormSelect
                  value={formCityId}
                  aria-label="Select Constituency"
                  options={[
                    'Select Constituency',
                    ...cities
                      .filter((city) => city.stateId === formStateId)
                      .map((city) => ({ label: city.city, value: city.id })),
                  ]}
                />
              </CCol>
            </CRow>
            <CRow className="pb-3">
              <CCol md={12}>
                <CFormSelect
                  value={formCandId}
                  aria-label="Select Candidate"
                  options={[
                    'Select Candidate',
                    ...candidates
                      .filter((cand) => cand.cityId === formCityId)
                      .map((cand) => ({ label: cand.name, value: cand.id })),
                  ]}
                />
              </CCol>
            </CRow>
            <CRow className="pb-3">
              <CCol md={6}>
                <CFormCheck
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Lead"
                />
              </CCol>
              <CCol md={6}>
                <CFormCheck
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="Won"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol md={7} />
              <CCol md={3}>
                <CButton
                  color="secondary"
                  onClick={() => {
                    setVisible(false)
                  }}
                >
                  Close
                </CButton>
              </CCol>
              <CCol md={2} className="d-flex justify-content-end">
                <CButton color="primary" type="submit">
                  Submit
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
      </CModal>
    </div>
  )
}

export default CandidateResult
